import { Time } from '@angular/common';

export interface Schedule {

    date: Date;
    dateReadable: string;
    tracks: Array<{ title: string }>;
    timeslots: [
        {
            startTime: Time;
            endTime: Time;
            sessions: Array<number[]>;
        }
    ];
}
