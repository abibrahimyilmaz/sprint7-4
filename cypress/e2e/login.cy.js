describe("Login sayfası", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  })


  it("Geçersiz e mail girdiğinde hata gösterir", () => {
    cy.get(`input[name="email"]`).type("invalidemail");
    cy.get(`input[name="password"]`).type("123");
    cy.get("button").should("be.disabled");
  })

  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  })

  it("Başarılı form doldurulduğunda submit edebiliyorum", () => {

    cy.get(`input[name="email"]`).type("erdem.guntay@wit.com.tr");
    cy.get(`input[name="password"]`).type(`9fxIH0GXesEwH_I`);
    cy.get('input[name="terms"]').check();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/Components/Success')
    cy.contains('Login Başarılı!').should('be.visible');



  })



})