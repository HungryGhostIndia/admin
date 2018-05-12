export class ConstService {
    baseUrl: string;
    constructor() {
        if (window.location.hostname == 'https://hungry-ghost.com') {
            this.baseUrl = 'https://hungry-ghost.herokuapp.com/api';  
        }
        else {
            this.baseUrl = 'https://hungry-ghost.herokuapp.com/api';   
        }      

    }
}
