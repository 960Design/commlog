# Communications Log
This project was requested 17 July 2022.
> The clock is clacking

## Project Notes
Students by teacher?
```
GET
teacher_uuid from /users?filter=username=first.last@schools.com
  response fields required
    "data": [
      {
        "total": MUST equal 1,
        "uuid": "xxx",
        "role": "teacher", (etc)
        "first_name": "John",
        "middle_name": "Gerard",
        "last_name": "Doe",
        "email": "first.last@schools.com"
        "school_uuids": [
          "d077d0c5-885e-40f1...",
        ],
        "active": true
      }
    ]
```

if /user role == teacher
```
GET
section_uuid from /users/:uuid/enrollements
  response fields required
  "data": [
      {
        "section_uuid": guid,
        "start_date": "2022-08-10",
        "end_date": "2023-05-25",
        "active": true
      }
    ]
```
```
GET
students from each /sections/:uuid/students
  response fields required
  "data": [
    {
      "uuid": guid,
      "username": "john.doe@student.schools.com",
      "first_name": "John",
      "middle_name": "Mercy",
      "last_name": "Doe",
      "school_uuids": [guid],
      "gradelevels":["11"],
      "active": true
    }
  ]
```
```
POST
  student_uuid ( student_uuid will be search key)
  communications_uuid ( unique key )
  employee_name
  contact_type ( outgoing, incoming )
  contact_means ( phone, email, mail, in-person, other )
  contact_datetime ( formatted for display = almost ISO )
  contact_reason ( attendance, discipline, academics, other )
  contact_name ( person contacted )
  contact_note ( text < 500 characters )
  updated ( used to record edits to original for historical purposes = version control )
  deleted ( hard delete required )
```
```
NOTE:  communications API to retrieve records from student
/api/v1/communications/:uuid(student)

if /user role == 'admin' ( /profiles OR /userProfiles )
GET all students at matching center(s) for user uuid?

if /user role == '

Limit Employee within Communcation Log listing to 20 characters and last name only
```


### `Notes from Sam`
```
returns enrollments across all marking periods
/sections/:uuid/enrollements
```
```
will need to pull the start/end dates for the marking period
/sections/:uuid/enrollments?filter=start_date<=:mp_end_date AND end_date>=:mp_start_date
```
```
Note:  The start/end date comparisons are intentionally mismatched
start1 <= end2 AND end1 >= start2
```
```
Example:
/sections/123/enrollments?filter=start_date<=2022-12-16 AND end_date>=2022-08-16
```
```
Note:
filtered routes are less performant

For instance this:
/sections/123/enrollments

is much faster than this:
/enrollments?filter=section_uuid=123

Regarding marking periods, here are some routes that should help:
/marking_periods (returns marking periods of all types)
/years
/semesters
/quarters
```


## VPS Notes
```
apt update
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs      (this installs both node and npm)
node -v
npm --version
```




---
---

Defaults:\
This is a new line.

**Bold note**

Link:\
Link demo [http://localhost:3000](http://localhost:3000) to view in browser.

### `Title highlight`

### Title without highlight

