const moment = require('moment');

/**
 * @param {number} seconds
 * @param {number} minutes
 * @param {number} hours
 * @param {number} days
 * @param {number} months
 * @param {number} years
 * @param {string} format
 */
function getDateTime(seconds, minutes, hours, days, months, years, format) {
    let now = moment();

    now.add(seconds, 'seconds');
    now.add(minutes, 'minutes');
    now.add(hours, 'hours');

    now.add(days, 'days');
    now.add(months, 'months');
    now.add(years, 'years');

    return now.format(format);
}

module.exports.templateTags = [
    {
        name: 'DateTimeAdd',
        displayName: 'DateTimeAdd',
        description: 'Provides a formatted datetime with addition.',
        args: [
            {
                displayName: 'Seconds to add',
                description: 'The seconds to add to the time.',
                type: 'number',
                defaultValue: 0,
            },
            {
                displayName: 'Minutes to add',
                description: 'The minutes to add to the time.',
                type: 'number',
                defaultValue: 0,
            },
            {
                displayName: 'Hours to add',
                description: 'The hours to add to the time.',
                type: 'number',
                defaultValue: 0,
            },
            {
                displayName: 'Days to add',
                description: 'The days to add to the date.',
                type: 'number',
                defaultValue: 0,
            },
            {
                displayName: 'Months to add',
                description: 'The months to add to the date.',
                type: 'number',
                defaultValue: 0,
            },
            {
                displayName: 'Years to add',
                description: 'The years to add to the date.',
                type: 'number',
                defaultValue: 0,
            },
            {
                displayName: 'Format',
                description: 'The output format of the datetime.',
                type: 'string',
                defaultValue: 'YYYY-MM-DDTHH:mm:ssZ',
            },
        ],
        /**
         * @param {any} _context
         * @param {number} seconds
         * @param {number} minutes
         * @param {number} hours
         * @param {number} days
         * @param {number} months
         * @param {number} years
         * @param {string} format
         */
        async run(_context, seconds, minutes, hours, days, months, years, format) {
            return getDateTime(seconds, minutes, hours, days, months, years, format);
        },
        /**
         * @param {any[]} context
         */
        liveDisplayName(context) {
            let values = context.map((/** @type {{ value: any; }} */ c) => c.value);

            // @ts-ignore
            return 'DateTimeAdd (' + getDateTime(...values) + ')';
        },
    },
];
