import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          in: "header",
        },
      },
      schemas: {
        Book: {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            title: {
              type: "string",
            },
            author: {
              type: "string",
            },
            publicationYear: {
              type: "number",
            },
          },
        },
        BooksResponse: {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            title: {
              type: "string",
            },
            author: {
              type: "string",
            },
            publicationYear: {
              type: "number",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
        RegisterSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
            password: {
              type: "string",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            email: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
        UserLogin: {
          type: "object",
          properties: {
            email: {
              type: "string",
              format: "email",
            },
            password: {
              type: "string",
            },
          },
        },
        LoanResponse: {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            userId: {
              type: "number",
            },
            bookId: {
              type: "number",
            },
            loanDate: {
              type: "string",
            },
            returnDate: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
        StripeSchema: {
            type: "object",
            properties: {
                bookId: {
                    type: "string"
                },
                quantity: {
                    type: "number"
                }
            }
        },
        StripeResponse: {
            type: "object",
            properties: {
                payment_url: {
                    type: "string"
                }
            }
        },
      },
    },
  },
  apis: [`${path.join(__dirname, "./routes/*")}`],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
