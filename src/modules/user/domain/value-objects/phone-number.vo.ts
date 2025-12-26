import {
  type NationalNumber,
  parsePhoneNumber,
  type CountryCode,
} from 'libphonenumber-js';
import { ValueObject } from 'src/shared/domain/base.vo';

export class PhoneNumber extends ValueObject<string> {
  private readonly parsed: ReturnType<typeof parsePhoneNumber>;

  private constructor(
    value: string,
    parsed: ReturnType<typeof parsePhoneNumber>,
  ) {
    super(value);
    this.parsed = parsed;
  }

  public static create(value: string): PhoneNumber {
    if (!value.startsWith('+')) {
      throw new Error('Phone number must start with +');
    }

    const parsed = parsePhoneNumber(value);

    if (!parsed || !parsed.isValid()) {
      throw new Error('Invalid phone number');
    }
    if (!parsed.country) {
      throw new Error('Could not determine country from phone number');
    }

    return new PhoneNumber(value, parsed);
  }

  public get countryCode(): CountryCode {
    return this.parsed.country!;
  }

  public get number(): NationalNumber {
    return this.parsed.nationalNumber;
  }

  public equals(other: ValueObject<string>): boolean {
    return this.value === other.value;
  }
}
