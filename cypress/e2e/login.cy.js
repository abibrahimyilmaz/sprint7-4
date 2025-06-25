describe("Login sayfası", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  })

  it("Geçersiz e mail girdiğinde hata gösterir", () => {
    cy.get(`input[name="email"]`).type("invalidemail");
    cy.get(`input[name="password"]`).type("123");
    cy.get("button").should("be.disabled");
  })

})