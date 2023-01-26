it.skip("Should successfully login", () => {
  cy.visit("/");
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
});

it.skip("Should not login with empty login", () => {
  cy.visit("/");
  cy.contains("Log in").click();
  cy.get("#mail").type(" ");
  cy.get("#pass").type("123");
  cy.contains("Submit").click();
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it.skip("Should not login with empty password", () => {
  cy.visit("/");
  cy.contains("Log in").click();
  cy.get("#mail").type("bropet@mail.ru");
  cy.contains("Submit").click();
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

beforeEach(() => {
  cy.visit("/");
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать").should("be.visible");
});
describe("When user add the books", () => {
  it("Should adding a book by button", () => {
    // cy.visit("/");
    // cy.login("bropet@mail.ru", "123");
    cy.contains("Add new").click();
    cy.get("#title").type("Говорит Сэт");
    cy.get("#description").type("Ченнелинг");
    cy.get("#authors").type("Дж. Робертс");
    cy.contains("Submit").click();
    cy.contains("Говорит Сэт").should("be.visible");
  });

  it("Should adding a book to favorites", () => {
    // cy.visit("/");
    //cy.login("bropet@mail.ru", "123");
    cy.contains("Говорит Сэт").contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains("Говорит Сэт").should("be.visible");
  });

  it("Should deleting a book favorites", () => {
    // cy.visit("/");
    //cy.login("bropet@mail.ru", "123");
    cy.contains("Books list").click();
    cy.contains("Favorites").click();
    cy.contains("Говорит Сэт").contains("Delete from favorite").click();
    cy.contains("Говорит Сэт").should("not.exist");
  });
});
