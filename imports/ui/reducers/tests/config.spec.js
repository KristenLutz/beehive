import reducer, { DEFAULT_STATE } from "../config";
import { SET_CONFIG_VALUE } from "../../actionTypes/config";

describe("config reducer", () => {
  it("should return the initial state", () => {
    const result = reducer(DEFAULT_STATE, {});
    expect(result).toEqual(DEFAULT_STATE);
  });

  it("should not the initial state when the state is null", () => {
    const result = reducer(null, {});
    const expected = null;
    expect(result).toEqual(expected);
  });

  it("should not the initial state when the state is not defined", () => {
    const result = reducer(undefined, {});
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle SET_CONFIG_VALUE", () => {
    const mockAction = {
      type: SET_CONFIG_VALUE,
      payload: { key: "sampleConfig", value: 111 }
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      [mockAction.payload.key]: mockAction.payload.value
    };
    expect(result).toEqual(expected);
  });
});
