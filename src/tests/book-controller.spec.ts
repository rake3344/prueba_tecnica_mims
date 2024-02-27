import request from "supertest";
import app from "../app";

jest.mock("../services/book-service");

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlVzZXIiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MDkwNDY3ODIsImV4cCI6MTcwOTEzMzE4Mn0.cp18V7MMZlnMtqlZWc5-7JKSYYoE4KmIBRsPxn_h3Jg";

describe("Book Controller", () => {
  describe("createBookController", () => {
    test("should return 400 if fields are missing", async () => {
      const req = {
        body: {
          author: "Author",
        },
      };
      const response = await request(app)
        .post("/api/books")
        .send(req.body)
        .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(400);
    });

    test("should return 201 if book is created", async () => {
      const req = {
        body: {
          title: "Title",
          author: "Author",
          publicationYear: 2022,
        },
      };
      const response = await request(app)
        .post("/api/books")
        .send(req.body)
        .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(201);
    });
  });
  describe("getBookByIdController", () => {
    test("should return 404 if book is not found", async () => {
      const response = await request(app)
        .get("/api/books/100")
        .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(404);
    });
  })
});
