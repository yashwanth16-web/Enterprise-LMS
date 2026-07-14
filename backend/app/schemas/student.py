from pydantic import BaseModel, EmailStr


class StudentBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    course: str
    status: str


class StudentCreate(StudentBase):
    pass


class StudentUpdate(StudentBase):
    pass


class StudentResponse(StudentBase):
    id: int

    class Config:
        from_attributes = True