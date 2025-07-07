using { first_cap.db as db } from '../db/Schema';

service MyService {
  entity Users as projection on db.Users; 
}