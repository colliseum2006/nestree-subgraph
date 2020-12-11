# nestree-subgraph
This is the subgraph, a collection of GraphQL schemas and mappings that parse the events broadcast by the Nestree on the Ethereum blockchain.

Our smart contracts can be found in this repository https://etherscan.io/address/0x65ccd72c0813ce6f2703593b633202a0f3ca6a0c#code.

# Development
Before you can build, create and deploy this subgraph, you have to execute the following commands in the terminal:

$ yarn install

$ yarn prepare:mainnet

The first command installs all external dependencies, while the latter generates the subgraph.yaml file, which is required by The Graph.

The manual how to deploy Subgraph you can find here https://colliseum2006-23245.medium.com/как-быстро-задеплоить-subgraph-пошаговый-чеклист-функций-в-power-shell-a8f4741c6288
