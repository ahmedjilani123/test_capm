namespace first_cap.db;

entity Users{
    key ID : Integer;
    Name : String(100);
    Email : String(100);
    Password : String(100);
}