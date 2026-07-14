from pydantic import BaseModel, EmailStr


class InstructorBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    specialization: str
    status: str


class InstructorCreate(InstructorBase):
    pass


class InstructorUpdate(InstructorBase):
    pass


class InstructorResponse(InstructorBase):
    id: int

    class Config:
        from_attributes = True