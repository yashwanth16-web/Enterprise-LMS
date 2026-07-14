from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.notification import NotificationResponse
from app.services.notification_service import get_notifications

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"],
)


@router.get(
    "/",
    response_model=list[NotificationResponse],
)
def notifications(
    db: Session = Depends(get_db),
):
    return get_notifications(db)