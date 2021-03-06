import {mapReturnedResponse} from "../../../../packages/common/src/mvc/utils/mapReturnedResponse";
import {expect} from "../../../tools";

describe("mapReturnedResponse", () => {
  it("should map the response (1)", () => {
    expect(
      mapReturnedResponse({
        description: "description",
        type: "type",
        collection: "collection",
        headers: "headers"
      })
    ).to.deep.eq({
      description: "description",
      type: "type",
      collectionType: "collection",
      headers: "headers"
    });
  });

  it("should map the response (2)", () => {
    expect(
      mapReturnedResponse({
        description: "description",
        use: "use",
        collection: "collection",
        headers: "headers"
      })
    ).to.deep.eq({
      description: "description",
      type: "use",
      collectionType: "collection",
      headers: "headers"
    });
  });
});
