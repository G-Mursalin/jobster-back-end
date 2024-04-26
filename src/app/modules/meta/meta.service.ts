import { dateHelpers } from '../../helpers/dateHelpers/dateHelpers';
import { Job } from '../job/job.model';

const countJobsStats = async () => {
    const stats = await Job.aggregate([
        {
            $match: {},
        },
        {
            $group: {
                _id: '$status',
                numberOfTotalStats: { $sum: 1 },
            },
        },
    ]);

    const statsObj: Record<string, unknown> = {};

    stats.map((val) => (statsObj[val._id] = val.numberOfTotalStats));

    return statsObj;
};

const countLastSixMonthJobs = async () => {
    const stats = await Job.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: new Date(
                        dateHelpers.subtractMonthsFromCurrentDate(
                            new Date(),
                            6,
                        ),
                    ),
                    $lte: new Date(
                        dateHelpers.addOneDayWithCurrentDate(new Date()),
                    ),
                },
            },
        },
        {
            $group: {
                _id: {
                    month: { $month: '$createdAt' },
                    year: { $year: '$createdAt' },
                },
                count: { $sum: 1 },
            },
        },
        { $sort: { _id: 1 } },
        {
            $addFields: {
                month: {
                    $let: {
                        vars: {
                            monthsInString: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'July',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ],
                        },
                        in: {
                            $arrayElemAt: [
                                '$$monthsInString',
                                { $subtract: ['$_id.month', 1] },
                            ],
                        },
                    },
                },
            },
        },
        {
            $addFields: {
                monthYear: {
                    $concat: ['$month', '-', { $toString: '$_id.year' }],
                },
            },
        },
    ]);

    return stats;
};

export const metaServices = {
    countJobsStats,
    countLastSixMonthJobs,
};
