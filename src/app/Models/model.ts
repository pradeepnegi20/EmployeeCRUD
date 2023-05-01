export class User{
    Id:number=0;
    Name:string='';
    EmpId:number=0;
    LastName:string='';
    Password:string='';
    Email:string='';
    Phone:string='';
    Role:string='';
    JDate:any;
    CreatedDate:any;
    FamilyInfo:any;
    Image:any;


}
export class EditUser{
    Id:any;
    Name:any;
    
    LastName:any='';
    Password:any='';
    Email:any='';
    Phone:any='';
    Role:any;
    JDate:any;
    CreatedDate:any;
    FamilyInfo:any;
    Image:any;


}


export class Login{
    Email:string='';
    Password:string='';
}