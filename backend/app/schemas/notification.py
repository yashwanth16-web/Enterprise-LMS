from datetime import datetime
from pydantic import BaseModel


class NotificationResponse(BaseModel):
    id: int
    title: str
    description: str
    type: str
    created_at: datetime

    class Config:
        from_attributes = True