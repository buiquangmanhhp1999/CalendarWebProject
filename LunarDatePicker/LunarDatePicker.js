var TK19 = new Array(
    0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0,
    0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4,
    0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0,
    0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0,
    0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4,
    0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0,
    0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0,
    0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3,
    0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550,
    0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50
); /* Years 2000-2099 */

var TK20 = new Array(
    0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
    0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
    0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d50, 0x312b54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
    0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
    0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
    0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
    0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
    0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
    0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
    0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
); /* Years 1900-1999 */

var TK21 = new Array(
    0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
    0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
    0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
    0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
    0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
    0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
    0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
    0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
    0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
    0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
); /* Years 2000-2099 */

var TK22 = new Array(
    0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
    0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
    0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
    0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
    0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
    0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
    0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
    0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
    0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
    0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
); /* Years 2100-2199 */

function LunarDate(dd, mm, yy, leap, jd) {
    this.day = dd;
    this.month = mm;
    this.year = yy;
    this.leap = leap;
    this.jd = jd;
}

function INT(d) {
    return Math.floor(d);
}

function jdn(dd, mm, yy) {
    var a = INT((14 - mm) / 12);
    var y = yy + 4800 - a;
    var m = mm + 12 * a - 3;
    var jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
    return jd;
}

function decodeLunarYear(yy, k) {
    var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
    var ly = new Array();
    monthLengths = new Array(29, 30);
    regularMonths = new Array(12);
    offsetOfTet = k >> 17;
    leapMonth = k & 0xf;
    leapMonthLength = monthLengths[k >> 16 & 0x1];
    solarNY = jdn(1, 1, yy);
    currentJD = solarNY + offsetOfTet;
    j = k >> 4;
    for (i = 0; i < 12; i++) {
        regularMonths[12 - i - 1] = monthLengths[j & 0x1];
        j >>= 1;
    }
    if (leapMonth == 0) {
        for (mm = 1; mm <= 12; mm++) {
            ly.push(new LunarDate(1, mm, yy, 0, currentJD));
            currentJD += regularMonths[mm - 1];
        }
    } else {
        for (mm = 1; mm <= leapMonth; mm++) {
            ly.push(new LunarDate(1, mm, yy, 0, currentJD));
            currentJD += regularMonths[mm - 1];
        }
        ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD));
        currentJD += leapMonthLength;
        for (mm = leapMonth + 1; mm <= 12; mm++) {
            ly.push(new LunarDate(1, mm, yy, 0, currentJD));
            currentJD += regularMonths[mm - 1];
        }
    }
    return ly;
}

function getYearInfo(yyyy) {
    var yearCode;
    if (yyyy < 1900) {
        yearCode = TK19[yyyy - 1800];
    } else if (yyyy < 2000) {
        yearCode = TK20[yyyy - 1900];
    } else if (yyyy < 2100) {
        yearCode = TK21[yyyy - 2000];
    } else {
        yearCode = TK22[yyyy - 2100];
    }
    return decodeLunarYear(yyyy, yearCode);
}

var FIRST_DAY = jdn(25, 1, 1800); // Tet am lich 1800
var LAST_DAY = jdn(31, 12, 2199);

function findLunarDate(jd, ly) {
    if (jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
        return new LunarDate(0, 0, 0, 0, jd);
    }
    var i = ly.length - 1;
    while (jd < ly[i].jd) {
        i--;
    }
    var off = jd - ly[i].jd;
    ret = new LunarDate(ly[i].day + off, ly[i].month, ly[i].year, ly[i].leap, jd);
    return ret;
}

function getLunarDate(dd, mm, yyyy) {
    var ly, jd;
    if (yyyy < 1800 || 2199 < yyyy) {
        //return new LunarDate(0, 0, 0, 0, 0);
    }
    ly = getYearInfo(yyyy);
    jd = jdn(dd, mm, yyyy);
    if (jd < ly[0].jd) {
        ly = getYearInfo(yyyy - 1);
    }
    return findLunarDate(jd, ly);
}

function getMonth(mm, yy) {
    var ly1, ly2, tet1, jd1, jd2, mm1, yy1, result, i;
    if (mm < 12) {
        mm1 = mm + 1;
        yy1 = yy;
    } else {
        mm1 = 1;
        yy1 = yy + 1;
    }
    jd1 = jdn(1, mm, yy);
    jd2 = jdn(1, mm1, yy1);
    ly1 = getYearInfo(yy);
    //alert('1/'+mm+'/'+yy+' = '+jd1+'; 1/'+mm1+'/'+yy1+' = '+jd2);
    tet1 = ly1[0].jd;
    result = new Array();
    if (tet1 <= jd1) { /* tet(yy) = tet1 < jd1 < jd2 <= 1.1.(yy+1) < tet(yy+1) */
        for (i = jd1; i < jd2; i++) {
            result.push(findLunarDate(i, ly1));
        }
    } else if (jd1 < tet1 && jd2 < tet1) { /* tet(yy-1) < jd1 < jd2 < tet1 = tet(yy) */
        ly1 = getYearInfo(yy - 1);
        for (i = jd1; i < jd2; i++) {
            result.push(findLunarDate(i, ly1));
        }
    } else if (jd1 < tet1 && tet1 <= jd2) { /* tet(yy-1) < jd1 < tet1 <= jd2 < tet(yy+1) */
        ly2 = getYearInfo(yy - 1);
        for (i = jd1; i < tet1; i++) {
            result.push(findLunarDate(i, ly2));
        }
        for (i = tet1; i < jd2; i++) {
            result.push(findLunarDate(i, ly1));
        }
    }
    return result;
}

var LDP_CONFIG = {
    'ldp_prefix': 'ldp',
    'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    'weekdays': ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    'longwdays': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'yearscroll': true, // show year scroller
    'weekstart': 0, // first day of week: 0-Su or 1-Mo
    'prevyear': 'Previous year',
    'nextyear': 'Next year',
    'prevmonth': 'Previous month',
    'nextmonth': 'Next month',
    'format': 'm/d/Y'
};

var LDP_TOKENS = [
    // A full numeric representation of a year, 4 digits
    {
        't': 'Y',
        'r': '19\\d{2}|20\\d{2}',
        'p': function (date_date, n_value) {
            date_date.setFullYear(Number(n_value));
            return date_date;
        },
        'g': function (date_date) {
            var n_year = date_date.getFullYear();
            return n_year;
        }
    },
    // Numeric representation of a month, with leading zeros
    {
        't': 'm',
        'r': '0?[1-9]|1[0-2]',
        'p': function (date_date, n_value) {
            date_date.setMonth(Number(n_value) - 1);
            return date_date;
        },
        'g': function (date_date) {
            var tmp_month = date_date.getMonth() + 1;
            return (tmp_month < 10 ? '0' : '') + tmp_month
        }
    },
    // A full textual representation of a month, such as January or March
    {
        't': 'F',
        'r': LDP_CONFIG.months.join('|'),
        'p': function (date_date, string_valueue) {
            for (var m = 0; m < 12; m++)
                if (LDP_CONFIG.months[m] == string_valueue) {
                    date_date.setMonth(m);
                    return date_date;
                }
        },
        'g': function (date_date) {
            return LDP_CONFIG.months[date_date.getMonth()];
        }
    },
    // Day of the month, 2 digits with leading zeros
    {
        't': 'd',
        'r': '0?[1-9]|[12][0-9]|3[01]',
        'p': function (date_date, n_value) {
            date_date.setDate(Number(n_value));
            if (date_date.getDate() != n_value) date_date.setDate(0);
            return date_date;
        },
        'g': function (date_date) {
            var tmp_date = date_date.getDate();
            return (tmp_date < 10 ? '0' : '') + tmp_date;
        }
    },
    // Day of the month without leading zeros
    {
        't': 'j',
        'r': '0?[1-9]|[12][0-9]|3[01]',
        'p': function (date_date, n_value) {
            date_date.setDate(Number(n_value));
            if (date_date.getDate() != n_value) date_date.setDate(0);
            return date_date
        },
        'g': function (date_date) {
            var tmp_date = date_date.getDate();
            return tmp_date;
        }
    },
    // A full textual representation of the day of the week
    {
        't': 'l',
        'r': LDP_CONFIG.longwdays.join('|'),
        'p': function (date_date, string_valueue) {
            return date_date
        },
        'g': function (date_date) {
            return LDP_CONFIG.longwdays[date_date.getDay()];
        }
    },
    // English ordinal suffix for the day of the month, 2 characters
    {
        't': 'S',
        'r': 'st|nd|rd|th',
        'p': function (date_date, string_valueue) {
            return date_date
        },
        'g': function (date_date) {
            var tmp_date = date_date.getDate();
            if (tmp_date % 10 == 1 && tmp_date != 11) return 'st';
            if (tmp_date % 10 == 2 && tmp_date != 12) return 'nd';
            if (tmp_date % 10 == 3 && tmp_date != 13) return 'rd';
            return 'th';
        }
    }

];

function lunarDatePickerStringOnchangeEventYear(date_date) {
    var cur = new Date();
    var cbo = '<select onchange="lunarDatePickerUpdate(new Date(this.value,' + (date_date.getMonth()) + ',1).valueOf(),1)">';
    for (var i = cur.getFullYear() - 50; i < cur.getFullYear() + 50; i++) {
        cbo += '<option value=\'' + i + '\'';
        if (i == date_date.getFullYear()) cbo += ' selected ';
        cbo += '>' + i + '</option>';
    }
    cbo += '</select>';
    return cbo;
}

function lunarDatePickerStringOnchangeEventMonth(date_date) {
    var cur = new Date();
    var cbo = '<select onchange="lunarDatePickerUpdate(new Date(' + (date_date.getFullYear()) + ',this.value,1).valueOf(),1)">';
    for (var i = 0; i < 12; i++) {
        cbo += '<option value=\'' + i + '\'';
        if (i == date_date.getMonth()) cbo += ' selected ';
        cbo += '>' + LDP_CONFIG.months[i] + '</option>';
    }
    cbo += '</select>';
    return cbo;
}

function lunarDatePickerHTML(date_date) {
    var input_element = lunarDatePickerGetInputs(true);
    if (!input_element) return;

    var date_format = LDP_CONFIG.format;

    // today from config or client date
    var today_date = lunarDatePickerSetTime(new Date());

    // selected date from input or config or today 
    var selected_date = lunarDatePickerStringToDate(input_element.value, date_format);
    if (!selected_date)
        selected_date = lunarDatePickerStringToDate(LDP_CONFIG.selected, LDP_CONFIG.format);
    if (!selected_date)
        selected_date = new Date(today_date);

    // show calendar for passed or selected date
    date_date = date_date ? lunarDatePickerSetTime(date_date) : new Date(selected_date);

    var firstday_date = new Date(date_date);
    firstday_date.setDate(1);
    firstday_date.setDate(1 - (7 + firstday_date.getDay() - LDP_CONFIG.weekstart) % 7);

    var add_list_class;
    var string_html =
    '<table id="' + LDP_CONFIG.ldp_prefix + 'Controls">' +
        '<tbody>' +
            '<tr  id="' + LDP_CONFIG.ldp_prefix + 'tr">' +
                (LDP_CONFIG.yearscroll ? '<td id="' + LDP_CONFIG.ldp_prefix + 'PrevYear"' + lunarDatePickerStringEventUpdate(date_date, -1, 'Y') + ' title="' + LDP_CONFIG.prevyear + '"></td>' : '') +
                '<td id="' + LDP_CONFIG.ldp_prefix + 'PrevMonth"' + lunarDatePickerStringEventUpdate(date_date, -1) + ' title="' + LDP_CONFIG.prevmonth + '"></td>' +
                '<th>' + 
                    lunarDatePickerStringOnchangeEventMonth(date_date) + ' ' + lunarDatePickerStringOnchangeEventYear(date_date) +
                '</th>' +
                '<td id="' + LDP_CONFIG.ldp_prefix + 'NextMonth"' + lunarDatePickerStringEventUpdate(date_date, 1) + ' title="' + LDP_CONFIG.nextmonth + '"></td>' +
                (LDP_CONFIG.yearscroll ? '<td id="' + LDP_CONFIG.ldp_prefix + 'NextYear"' + lunarDatePickerStringEventUpdate(date_date, 1, 'Y') + ' title="' + LDP_CONFIG.nextyear + '"></td>' : '') +
            '</tr>' +
        '</tbody>' +
    '</table>' +
    '<table id="' + LDP_CONFIG.ldp_prefix + 'Grid">' +
        '<tbody>' +
            '<tr  id="' + LDP_CONFIG.ldp_prefix + 'tr">';

    // print weekdays titles
    for (var i = 0; i < 7; i++)
        string_html +=
                '<th>' + LDP_CONFIG.weekdays[(LDP_CONFIG.weekstart + i) % 7] + '</th>';
    string_html +=
            '</tr>';

    // print calendar table
    var tmp_date;
    var tmp_month;
    var tmp_cur = new Date(firstday_date);
    while (tmp_cur.getMonth() == date_date.getMonth() || tmp_cur.getMonth() == firstday_date.getMonth()) {

        string_html +=
            '<tr  id="' + LDP_CONFIG.ldp_prefix + 'tr">';
        for (var day_of_week = 0; day_of_week < 7; day_of_week++) {

            add_list_class = [];
            tmp_date = tmp_cur.getDate();
            tmp_month = tmp_cur.getMonth();
            lunar_date = getLunarDate(tmp_date, tmp_month + 1, tmp_cur.getFullYear());
            if (tmp_cur.getMonth() != date_date.getMonth())
                add_list_class[add_list_class.length] = LDP_CONFIG.ldp_prefix + 'OtherMonth';
            if (tmp_cur.getDay() == 0 || tmp_cur.getDay() == 6)
                add_list_class[add_list_class.length] = LDP_CONFIG.ldp_prefix + 'Weekend';
            if (tmp_cur.valueOf() == today_date.valueOf())
                add_list_class[add_list_class.length] = LDP_CONFIG.ldp_prefix + 'Today';
            if (tmp_cur.valueOf() == selected_date.valueOf())
                add_list_class[add_list_class.length] = LDP_CONFIG.ldp_prefix + 'Selected';

            string_html +=
                '<td' + lunarDatePickerStringEventUpdate(tmp_cur) + (add_list_class.length ? ' class="' + add_list_class.join(' ') + '">' : '>') + tmp_date + '<sub>' + (lunar_date.day == 1 ? lunar_date.day + "/" + lunar_date.month : lunar_date.day) + '</sub></td>';
            tmp_cur.setDate(++tmp_date);
        }
        string_html +=
            '</tr>';
    }
    string_html +=
        '</tbody>' +
    '</table>';

    return string_html;
}

function lunarDatePickerStringEventUpdate(date_date, date_difference, month_or_fullyear) {
    var month_or_fullyear = (month_or_fullyear == 'Y' ? 'FullYear' : 'Month');
    var d_result = new Date(date_date);
    if (date_difference) {
        d_result['set' + month_or_fullyear](date_date['get' + month_or_fullyear]() + date_difference);
        if (d_result.getDate() != date_date.getDate())
            d_result.setDate(0);
    }
    return ' onclick="lunarDatePickerUpdate(' + d_result.valueOf() + (date_difference ? ',1' : '') + ')"';
}

function lunarDatePickerSetTime(date_date) {
    date_date.setMilliseconds(0);
    date_date.setSeconds(0);
    date_date.setMinutes(0);
    date_date.setHours(12);
    return date_date;
}

function lunarDatePickerCancel() {
    var element_id = document.getElementById(LDP_CONFIG.ldp_prefix);
    if (element_id)
        element_id.style.visibility = '';
    var list_input_element = lunarDatePickerGetInputs();
    for (var i = 0; i < list_input_element.length; i++)
        list_input_element[i].classList.remove(LDP_CONFIG.ldp_prefix + 'Active');
}

function lunarDatePickerUpdate(obj_date, keep_open) {
    var input_element = lunarDatePickerGetInputs(true);
    if (!input_element) return;

    date_date = new Date(obj_date);

    if (keep_open) {
        var element_id = document.getElementById(LDP_CONFIG.ldp_prefix);
        if (!element_id || element_id.style.visibility != 'visible') return;
        element_id.innerHTML = lunarDatePickerHTML(date_date, input_element);
    } else {
        input_element.value = lunarDatePickerDateToString(date_date, LDP_CONFIG.format);
        lunarDatePickerCancel();
    }
}

function lunarDatePickerShow() {
    // see if already opened
    var check_has_class = this.classList.contains(LDP_CONFIG.ldp_prefix + 'Active')

    // close all clalendars
    lunarDatePickerCancel();
    if (check_has_class) return;

    // get position of input
    this.classList.add(LDP_CONFIG.ldp_prefix + 'Active');

    var pos_left = lunarDatePickerGetPosition(this, 'Left');
    var pos_top = lunarDatePickerGetPosition(this, 'Top') + this.offsetHeight;

    var element_id = document.getElementById(LDP_CONFIG.ldp_prefix);
    if (!element_id) {
        element_id = document.createElement('div');
        element_id.onselectstart = function () { return false };
        element_id.id = LDP_CONFIG.ldp_prefix;
        document.getElementsByTagName("body").item(0).appendChild(element_id);
    }
    element_id.innerHTML = lunarDatePickerHTML(null);
    element_id.style.top = pos_top + 'px';
    element_id.style.left = ((pos_left + this.offsetWidth - element_id.offsetWidth) < 0 ? 0 : (pos_left + this.offsetWidth - element_id.offsetWidth)) + 'px';
    element_id.style.visibility = 'visible';
}

function lunarDatePickerStringToDate(string_date, date_format) {
    if (!string_date) return;

    var char;
    var string_regexp = '^';
    var tokens_pos = {};
    var token_pos = 0;

    for (var i = 0; i < date_format.length; i++) {
        char = date_format.charAt(i);
        if (token_index[char]) {
            tokens_pos[char] = ++token_pos;
            string_regexp += '(' + token_index[char]['r'] + ')';
        } else if (char == ' ')
            string_regexp += '\\s';
        else
            string_regexp += (char.match(/[\w\d]/) ? '' : '\\') + char;
    }
    var regexp_date = new RegExp(string_regexp + '$');
    if (!string_date.match(regexp_date)) return;

    var string_value, date_date = lunarDatePickerSetTime(new Date());
    date_date.setDate(1);

    for (i = 0; i < LDP_TOKENS.length; i++) {
        char = LDP_TOKENS[i]['t'];
        if (!tokens_pos[char])
            continue;
        string_value = RegExp['$' + tokens_pos[char]];
        date_date = LDP_TOKENS[i]['p'](date_date, string_value);
    }

    return date_date;
}

function lunarDatePickerDateToString(date_date, date_format) {
    var char, string_date = '';
    for (var i = 0; i < date_format.length; i++) {
        char = date_format.charAt(i);
        string_date += token_index[char] ? token_index[char]['g'](date_date) : char;
    }
    return string_date;
}

function lunarDatePickerGetInputs(hasActive) {
    var list_input_element = document.getElementsByTagName('input');
    var input_element;
    var res = [];

    for (var i = 0; i < list_input_element.length; i++) {
        input_element = list_input_element[i];
        if (!input_element.type || input_element.type != 'text')
            continue;
        if (!input_element.classList.contains(LDP_CONFIG.ldp_prefix))
            continue;
        if (hasActive && input_element.classList.contains(LDP_CONFIG.ldp_prefix + 'Active'))
            return input_element;
        res[res.length] = input_element;
    }
    return hasActive ? null : res;
}

function lunarDatePickerGetPosition(element_ref, direction) {
    var res = 0;
    var offset;
    var element = element_ref;

    while (element) {
        offset = element["offset" + direction];
        res += offset;
        element = element.offsetParent;
    }

    element = element_ref;
    while (element != document.body) {
        offset = element["scroll" + direction];
        if (offset && element.style.overflow == 'scroll')
            res -= offset;
        element = element.parentNode;
    }
    return res;
}

function lunarDatePickerInit() {
    if (!document.getElementsByTagName)
        return;

    var input_element, list_input_element = lunarDatePickerGetInputs();
    for (var i = 0; i < list_input_element.length; i++) {
        input_element = list_input_element[i];
        input_element.onclick = lunarDatePickerShow;
        input_element.classList.add(LDP_CONFIG.ldp_prefix + 'Input');
    }

    window.token_index = {};
    for (i = 0; i < LDP_TOKENS.length; i++)
        token_index[LDP_TOKENS[i]['t']] = LDP_TOKENS[i];
}

function lunarDatePickerAddOnload(func_arg) {
    if (document.addEventListener) {
        window.addEventListener('load', func_arg, false);
    } else if (window.addEventListener) {
        window.addEventListener('onload', func_arg, false);
    } else {
        var funcOnLoad = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func_arg;
        } else {
            window.onload = function () {
                funcOnLoad();
                func_arg();
            }
        }
    }
}

lunarDatePickerAddOnload(lunarDatePickerInit);