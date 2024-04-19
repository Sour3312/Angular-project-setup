import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppUtils {
    removeSlash = (value: string): string => {
        return value.replace(/\//g, "");
    }

    isEmpty = (value: any): any => {
        return (value === undefined || value == null || value.length <= 0) ? true : false;
    }

    getElementIdx = (data: any, key: string, val: string): any => {
        for (let i = 0; i < data.length; i++) {
            for (let index = 0; index < data.length; index++) {
                if (data[index][key] === val) {
                    return index;
                }
            }
        }
    }

    toProperCase = (value: any): any => {
        if (value == undefined || value == null && value.length < 1) {
            return undefined;
        }
        return value.replace(
            /\w\S*/g,
            function (value: any) {
                return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
            }
        );
    }

    toCamelCase = (value: any): any => {
        if (value == undefined || value == null && value.length < 1) {
            return undefined;
        }
        return value.replace(
            /\w\S*/g,
            function (value: any) {
                return value.charAt(0).toLowerCase() + value.substr(1).toUpperCase();
            }
        );
    }

    sortTextData = (value: any): any => {
        if (value == undefined || value == null && value.length < 1) {
            return undefined;
        }
        return value.sort();
    }

    getHourInADay() {
        var hourInADay = [];
        for (let i = 0; i <= 24; i++) {
            let val = {};
            val = { 'id': i, 'text': i };
            hourInADay.push(val);
        }
        return hourInADay;
    }

    getMinutesInAHour() {
        var minsInAHour = [];
        for (let i = 0; i <= 60; i++) {
            let val = {};
            val = { 'id': i, 'text': i };
            minsInAHour.push(val);
        }
        return minsInAHour;
    }

    toEpochMillis = (value: any): any => {
        const parts = value.split(' ');
        const dateParts = parts[0].split('-');
        const timeParts = parts[1].split(':');
        const date = new Date(
            parseInt(dateParts[0], 10),
            parseInt(dateParts[1], 10) - 1,
            parseInt(dateParts[2], 10),
            parseInt(timeParts[0], 10),
            parseInt(timeParts[1], 10)
        );
        return date.getTime();
    }

    decodeEncodedPolyline = (value: any): any => {
        if (value != 'undefined') {
            var pts = [];
            var index = 0, len = value?.length;
            var lat = 0, lng = 0;
            while (index < len) {
                var b, shift = 0, result = 0;
                do {
                    b = value.charAt(index++).charCodeAt(0) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);

                var dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
                lat += dlat;
                shift = 0;
                result = 0;
                do {
                    b = value.charAt(index++).charCodeAt(0) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);
                var dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
                lng += dlng;
                pts.push([lat / 1E6, lng / 1E6]);
            }
            return pts;
        } else {
            return '';
        }
    }

    convertEpochInDate = (value: any): any => {
        const date = new Date(value);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
        return formattedDate;
    }

    convertEpochInTime = (value: any): any => {
        const date = new Date(value);

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        return formattedTime;
    }

    convertEpochInTimeHourAndMinutes = (value: any): any => {
        const date = new Date(value);

        let hours = date.getHours();
        const minutes = date.getMinutes();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} ${amOrPm}`;
        return formattedTime;
    }
}
