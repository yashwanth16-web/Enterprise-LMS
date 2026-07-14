from pydantic import BaseModel


class LessonCreate(BaseModel):
    title: str
    description: str
    video_url: str
    duration: int
    order_number: int
    course_id: int


class LessonUpdate(BaseModel):
    title: str
    description: str
    video_url: str
    duration: int
    order_number: int


class LessonResponse(BaseModel):
    id: int
    title: str
    description: str
    video_url: str
    duration: int
    order_number: int
    course_id: int

    class Config:
        from_attributes = True