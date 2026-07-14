from datetime import datetime
from pydantic import BaseModel


class DashboardStats(BaseModel):
    total_students: int
    total_courses: int
    total_instructors: int
    total_enrollments: int


class EnrollmentTrend(BaseModel):
    month: str
    enrollments: int


class CourseCategory(BaseModel):
    category: str
    total: int


class RecentActivity(BaseModel):
    id: int
    student_id: int
    course_id: int
    status: str
    enrolled_at: datetime

    class Config:
        from_attributes = True