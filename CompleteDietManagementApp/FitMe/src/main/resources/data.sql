insert into 
user(user_Id,fullname,age,gender,mobile,email,address,city,state,country,
     pincode,height,weight,bmi,reason,medical_Condition,dietary_Restriction,dietary_Custom,
     pregnant_Status,referral_Code,password,user_Type,friends_Referral_Code,Is_Approved) 
values (1,'Carolin',25,'Female',1234567890,'msnasa11@gmail.com','Kovilur','Dindigul','TN',
        'India',624005,162,55,21,'To improve strength','Normal','No','Non-Vegetarian','No','KA1234','$2a$10$ceiJRdCUhxihm4z/F/9wyeqICITurlcu/7DuIlGUK358DmC.FnTLi','Admin','AB1234','true');
        
insert into 
user(user_Id,fullname,age,gender,mobile,email,address,city,state,country,
     pincode,height,weight,bmi,reason,medical_Condition,dietary_Restriction,dietary_Custom,
     pregnant_Status,referral_Code,password,user_Type,friends_Referral_Code,Is_Approved) 
values (2,'Carolin',25,'Female',1234567890,'msnasa111@gmail.com','Kovilur','Dindigul','TN',
        'India',624005,162,55,21,'To improve strength','Normal','No','Non-Vegetarian','No','KA1235','$2a$10$ceiJRdCUhxihm4z/F/9wyeqICITurlcu/7DuIlGUK358DmC.FnTLi','Motivator','AB1235','true');
        
        
insert into 
user(user_Id,fullname,age,gender,mobile,email,address,city,state,country,
     pincode,height,weight,bmi,reason,medical_Condition,dietary_Restriction,dietary_Custom,
     pregnant_Status,referral_Code,password,user_Type,friends_Referral_Code,Is_Approved) 
values (3,'Abiya',25,'Female',1234567890,'pmsabiya0@gmail.com','Kovilur','Dindigul','TN',
        'India',624005,162,55,21,'To improve strength','Normal','No','Non-Vegetarian','Yes','KA1236','$2a$10$MC1D3HU/1mu6wqzhGHD5zenQRFwiB/4HSS0qJ3HTCDr/8yNQHhA3y','Motivator','AB1235','true');
        
insert into 
user(user_Id,fullname,age,gender,mobile,email,address,city,state,country,
     pincode,height,weight,bmi,reason,medical_Condition,dietary_Restriction,dietary_Custom,
     pregnant_Status,referral_Code,password,user_Type,friends_Referral_Code,Is_Approved) 
values (4,'Abiya1',25,'Female',1234567890,'pmsabiya1@gmail.com','Kovilur','Dindigul','TN',
        'India',624005,162,55,21,'To improve strength','Normal','No','Vegetarian','Yes','KA1237','$2a$10$MC1D3HU/1mu6wqzhGHD5zenQRFwiB/4HSS0qJ3HTCDr/8yNQHhA3y','Motivator','AB1235','true');
        
insert into 
user(user_Id,fullname,age,gender,mobile,email,address,city,state,country,
     pincode,height,weight,bmi,reason,medical_Condition,dietary_Restriction,dietary_Custom,
     pregnant_Status,referral_Code,password,user_Type,friends_Referral_Code,Is_Approved) 
values (5,'Abiya2',25,'Female',1234567890,'pmsabiya2@gmail.com','Kovilur','Dindigul','TN',
        'India',624005,162,55,21,'To improve strength','Normal','No','Vegetarian','Yes','KA1238','$2a$10$MC1D3HU/1mu6wqzhGHD5zenQRFwiB/4HSS0qJ3HTCDr/8yNQHhA3y','Motivator','AB1235','true');
        
insert into 
user(user_Id,fullname,age,gender,mobile,email,address,city,state,country,
     pincode,height,weight,bmi,reason,medical_Condition,dietary_Restriction,dietary_Custom,
     pregnant_Status,referral_Code,password,user_Type,friends_Referral_Code,Is_Approved) 
values (6,'Abiya3',25,'Female',1234567890,'pmsabiya3@gmail.com','Kovilur','Dindigul','TN',
        'India',624005,162,55,21,'To improve strength','Normal','No','Vegetarian','Yes','KA1232','$2a$10$MC1D3HU/1mu6wqzhGHD5zenQRFwiB/4HSS0qJ3HTCDr/8yNQHhA3y','Motivator','AB1235','true');

insert into 
user(user_Id,fullname,age,gender,mobile,email,address,city,state,country,
     pincode,height,weight,bmi,reason,medical_Condition,dietary_Restriction,dietary_Custom,
     pregnant_Status,referral_Code,password,user_Type,friends_Referral_Code,Is_Approved) 
values (7,'Abiya4',25,'Female',1234567890,'pmsabiya4@gmail.com','Kovilur','Dindigul','TN',
        'India',624005,162,55,21,'To improve strength','Normal','No','Vegetarian','Yes','KA1230','$2a$10$MC1D3HU/1mu6wqzhGHD5zenQRFwiB/4HSS0qJ3HTCDr/8yNQHhA3y','Challenger','AB1235','true');



INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q1_AboveBMI25',parsedatetime('01-01-2020','dd-MM-yyyy'),parsedatetime('31-03-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q1_AboveBMI25_Non_Veg', 'Q1_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q1_AboveBMI25_Veg', 'Q1_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q1_AboveBMI25_Only_Egg', 'Q1_AboveBMI25');


INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q1_BelowBMI25',parsedatetime('01-01-2020','dd-MM-yyyy'),parsedatetime('31-03-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q1_BelowBMI25_Non_Veg', 'Q1_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q1_BelowBMI25_Veg', 'Q1_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q1_BelowBMI25_Only_Egg', 'Q1_BelowBMI25');

INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q2_AboveBMI25',parsedatetime('01-04-2020','dd-MM-yyyy'),parsedatetime('30-06-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q2_AboveBMI25_Non_Veg', 'Q2_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q2_AboveBMI25_Veg', 'Q2_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q2_AboveBMI25_Only_Egg', 'Q2_AboveBMI25');

INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q2_BelowBMI25',parsedatetime('01-04-2020','dd-MM-yyyy'),parsedatetime('30-06-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q2_BelowBMI25_Non_Veg', 'Q2_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q2_BelowBMI25_Veg', 'Q2_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q2_BelowBMI25_Only_Egg', 'Q2_BelowBMI25');


INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q3_AboveBMI25',parsedatetime('01-07-2020','dd-MM-yyyy'),parsedatetime('30-09-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q3_AboveBMI25_Non_Veg', 'Q3_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q3_AboveBMI25_Veg', 'Q3_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q3_AboveBMI25_Only_Egg', 'Q3_AboveBMI25');

INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q3_BelowBMI25',parsedatetime('01-07-2020','dd-MM-yyyy'),parsedatetime('30-09-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q3_BelowBMI25_Non_Veg', 'Q3_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q3_BelowBMI25_Veg', 'Q3_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q3_BelowBMI25_Only_Egg', 'Q3_BelowBMI25');

INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q4_AboveBMI25',parsedatetime('01-10-2020','dd-MM-yyyy'),parsedatetime('31-12-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q4_AboveBMI25_Non_Veg', 'Q4_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q4_AboveBMI25_Veg', 'Q4_AboveBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q4_AboveBMI25_Only_Egg', 'Q4_AboveBMI25');

INSERT INTO BATCH (BATCH_ID, START_DATE,END_DATE,monthly_measurement_date) VALUES('Q4_BelowBMI25',parsedatetime('01-10-2020','dd-MM-yyyy'),parsedatetime('31-12-2020','dd-MM-yyyy'),1);
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q4_BelowBMI25_Non_Veg', 'Q4_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q4_BelowBMI25_Veg', 'Q4_BelowBMI25');
INSERT INTO GROUPS(GROUPS_ID, BATCH_BATCH_ID) values ('Q4_BelowBMI25_Only_Egg', 'Q4_BelowBMI25');	




