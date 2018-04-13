export class ConstService {
    baseUrl: string;
    constructor() {
        if (window.location.hostname == 'adhrSystem.com') {
            this.baseUrl = 'https://adhrSystem.api.com/api';  
        }
        else {
            this.baseUrl = 'https://hungry-ghost.herokuapp.com/api';   
        }      

    }
}
