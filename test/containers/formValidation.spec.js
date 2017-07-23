import { expect } from 'chai';
import { isTestUser, validateEmailPassword } from '../../src/containers/App/validation/formValidation.js';

describe('validation', () => {
    it('should check test user', () => {
        var result = isTestUser("test@test.pl", "Password1")
        expect(result.test).to.equal(true);
    });

    it('should check test user message', () => {
        var result = isTestUser("test@test.pl", "Password1")
        expect(result.message).to.equal("Login successfull");
    });

    it('should validate empty email and password', () => {
        var result = validateEmailPassword("", "")
        expect(result.message).to.equal("Email is invalid Password is invalid");
    });
    it('should validate empty email and good password', () => {
        var result = validateEmailPassword("", "Password1")
        expect(result.message).to.equal("Email is invalid ");
    });

    it('should validate good email and good password', () => {
        var result = validateEmailPassword("ala@makota.pl", "Password123")
        expect(result.message).to.equal("Invalid email or password");
    });
});
