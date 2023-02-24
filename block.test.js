const Block = require("./Block");

describe("Block", () => {
  const timestamp = "timestamp";
  const lastHash = "last-hash";
  const hash = "hello";
  const data = ["blockchain", "data"];

  const block = new Block({ timestamp, lastHash, hash, data });
  it("has a timestamp, lastHash, hash, data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
