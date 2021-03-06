export class JobPost {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public business_id: number,
        public user_id: number,
        public job_type_id: number,
        public job_naming_id: number,
        public contract_type_id: number,
        public study_level_id: number,
        public diploma_id: number,
        public job_xp_level_id: number,
        public alert_frequency_id: number,
        public week_work_hours: number,
        public start_date: string,
        public end_date: string,
        public is_asap: boolean = false,
        public is_hosting_employee: boolean = false,
        public is_urgent: boolean = false
    ) {  }
}