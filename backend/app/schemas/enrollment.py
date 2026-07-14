from pydantic import BaseModel
from datetime import datetime


class EnrollmentCreate(BaseModel):
    student_id: int
    course_id: int
    status: str = "Active"


class EnrollmentUpdate(BaseModel):
    status: str


class EnrollmentResponse(BaseModel):
    id: int
    student_id: int
    course_id: int
    status: str
    enrolled_at: datetime

    class Config:
        from_attributes = True