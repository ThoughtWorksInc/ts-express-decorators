import {expect} from "chai";
import {ConverterService} from "../../../../packages/common/src/converters";
import {inject} from "../../../../packages/testing/src/inject";

describe("DateConverter", () => {
  before(
    inject([ConverterService], (converterService: ConverterService) => {
      this.dateConverter = converterService.getConverter(Date);
      this.date = new Date();
    })
  );

  it("should do something", () => {
    expect(!!this.dateConverter).to.be.true;
  });

  describe("deserialize()", () => {
    it("should deserialize date as string to a Date", () => {
      expect(this.dateConverter.deserialize(this.date.toISOString())).to.be.an.instanceOf(Date);
    });

    it("should deserialize date as string to a Date", () => {
      const date = this.dateConverter.deserialize(this.date.toISOString());
      expect(date.getFullYear()).to.equals(this.date.getFullYear());
    });
  });

  describe("serialize()", () => {
    before(() => {
      this.dateTest = this.dateConverter.serialize(this.date);
    });

    it("should serialize data to a string", () => {
      expect(this.dateTest)
        .to.be.a("string")
        .and.to.equals(this.date.toISOString());
    });
  });
});
