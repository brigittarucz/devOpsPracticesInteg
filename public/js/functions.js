const dateFormatter = require('date-fns')

function similar_text(a, b) {
    var equivalency = 0;
    var minLength = (a.length > b.length) ? b.length : a.length;
    var maxLength = (a.length < b.length) ? b.length : a.length;
    for (var i = 0; i < minLength; i++) {
        if (a[i] == b[i]) {
            equivalency++;
        }
    }

    var weight = equivalency / maxLength;
    return (weight * 100) + "%";
}

module.exports.formatSimilarity = async function formatSimilarity(user, aEvents) {
    if (!aEvents.length) {
        return [];
    }
    
    for (const oEvent of aEvents) {

        var aProffessionalTarget = oEvent.proffessional_target.replace(/\s/g, '');
        aProffessionalTarget = aProffessionalTarget.split(',');

        for (let j = 0; j < aProffessionalTarget.length; j++) {
            var similarity = parseInt(similar_text(user.proffesion, aProffessionalTarget[j]));
            if (similarity > 10) {
                oEvent.similarity = similarity;
                break;
            }
        }
    }

    return aEvents;
}

module.exports.formatDate = async function formatDate(user, aEvents) {
    if (!aEvents.length) {
        return [];
    }

    for (const oEvent of aEvents) {
        var finalDate = [];
        if (oEvent.date.includes("-")) {
            var aDates = oEvent.date.split("-");
            var aDateBegin = aDates[0].split(".");
            oEvent.timestamp = dateFormatter.format(new Date(aDateBegin[2], (parseInt(aDateBegin[1]) - 1), aDateBegin[0]), 'T');
            aDateBegin = dateFormatter.format(new Date(aDateBegin[2], (parseInt(aDateBegin[1]) - 1), aDateBegin[0]), 'PPP');
            var aDateEnd = aDates[1].split(".");
            aDateEnd = dateFormatter.format(new Date(aDateEnd[2], (parseInt(aDateEnd[1]) - 1), aDateEnd[0]), 'PPP');
            finalDate.push(aDateBegin);
            finalDate.push(aDateEnd);
        } else {
            var aDate = oEvent.date.split(".");
            oEvent.timestamp = dateFormatter.format(new Date(aDate[2], (parseInt(aDate[1]) - 1), aDate[0]), 'T');
            aDate = dateFormatter.format(new Date(aDate[2], (parseInt(aDate[1]) - 1), aDate[0]), 'PPP');
            finalDate.push(aDate);
        }

        oEvent.date = finalDate;
    }

    return aEvents;
}

module.exports.formatPrice = async function formatPrice(user, aEvents) {
    if (!aEvents.length) {
        return [];
    }

    for (const oEvent of aEvents) {
        if(typeof(oEvent.attendance_price) === "string") {
            if (oEvent.attendance_price.charAt(0) === 'F') {
                var price = oEvent.attendance_price.slice(1, oEvent.attendance_price.length);
                price = 'From ' + price + 'DKK';
                oEvent.attendance_price = price;
            } else if (oEvent.attendance_price.includes('NA')) {
                oEvent.attendance_price = 'Not available';
            } else if (oEvent.attendance_price === '0') {
                oEvent.attendance_price = 'Free';
            } else {
                oEvent.attendance_price = '';
            }
        } else {
            oEvent.attendance_price = '';
        }
       

        if (typeof (oEvent.topics) === 'string') {
            oEvent.topics = oEvent.topics.split(', ');
        }
    }


    return aEvents;
}

module.exports.addToEventArray = async function addToEventArray(user, req) {
    if (!user.events.length) {
        var aUpdatedEvents = [];
        aUpdatedEvents.push(req.body.eventId);
        var sUpdatedEvents = JSON.stringify(aUpdatedEvents);
        return sUpdatedEvents;
    } else {

        // TODO: check if event exists, if not add

        var eventExists = 0;

        var aUserEvents = JSON.parse(user.events);
        aUserEvents.forEach(event => {
            if (event === req.body.eventId) {
                eventExists = 1;
            }
        });

        if (!eventExists) {
            aUserEvents.push(req.body.eventId);
            var sUpdatedEvents = JSON.stringify(aUserEvents);
            return sUpdatedEvents;
        } else {
            return 0;
        }

    }
}