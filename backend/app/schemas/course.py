from pydantic import BaseModel


class CourseCreate(BaseModel):
    title: str
    description: str
    category: str
    price: float
    thumbnail: str


class CourseUpdate(BaseModel):
    title: str
    description: str
    category: str
    price: float
    thumbnail: str


class CourseResponse(BaseModel):
    id: int
    title: str
    description: str
    category: str
    price: float
    thumbnail: str

    class Config:
        from_attributes = True