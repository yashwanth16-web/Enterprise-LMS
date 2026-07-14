from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import Base, engine

# Import Models
from app.models.user import User
from app.models.course import Course
from app.models.enrollment import Enrollment

# Import Routers
from app.routers.auth import router as auth_router
from app.routers.course import router as course_router
from app.routers.enrollment import router as enrollment_router

from app.models.lesson import Lesson
from app.routers.lesson import router as lesson_router

from fastapi.staticfiles import StaticFiles

from app.routers.upload import router as upload_router

from app.routers.students import router as student_router

from app.models.instructor import Instructor
from app.routers.instructors import router as instructor_router

from app.routers.analytics import router as analytics_router
from app.routers.search import router as search_router

from app.routers.notifications import router as notification_router

from fastapi.middleware.cors import CORSMiddleware

# Create Database Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Enterprise LMS API",
    description="Backend API for Enterprise Learning Management System",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(auth_router)
app.include_router(course_router)
app.include_router(enrollment_router)
app.include_router(lesson_router)
app.include_router(upload_router)
app.include_router(student_router)
app.include_router(instructor_router)
app.include_router(analytics_router)
app.include_router(notification_router)
app.include_router(search_router)
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)

@app.get("/")
def root():
    return {
        "success": True,
        "message": "🚀 Enterprise LMS Backend Running Successfully",
        "version": "1.0.0"
    }


@app.get("/health")
def health_check():
    return {
        "status": "Healthy",
        "database": "Connected",
        "server": "Running"
    }


@app.get("/api/info")
def api_info():
    return {
        "project": "Enterprise Learning Management System",
        "backend": "FastAPI",
        "database": "PostgreSQL",
        "version": "1.0.0",
        "developer": "Yashwanth"
    }
origins = [
    "http://localhost:5173",
    "https://enterprise-lms-blond.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)