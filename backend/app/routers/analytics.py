from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.analytics import (
    DashboardStats,
    EnrollmentTrend,
    CourseCategory,
    RecentActivity,
)

from app.services.analytics_service import (
    get_dashboard_stats,
    get_enrollment_trend,
    get_course_categories,
    get_recent_activity,
)

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get(
    "/dashboard",
    response_model=DashboardStats,
)
def dashboard(
    db: Session = Depends(get_db),
):
    return get_dashboard_stats(db)


@router.get(
    "/enrollment-trend",
    response_model=list[EnrollmentTrend],
)
def enrollment_trend(
    db: Session = Depends(get_db),
):
    return get_enrollment_trend(db)


@router.get(
    "/course-categories",
    response_model=list[CourseCategory],
)
def course_categories(
    db: Session = Depends(get_db),
):
    return get_course_categories(db)


@router.get(
    "/recent-activity",
    response_model=list[RecentActivity],
)
def recent_activity(
    db: Session = Depends(get_db),
):
    return get_recent_activity(db)