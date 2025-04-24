async function main() {
    const agent = new TestAgentMCP("your-anthropic-api-key");
    await agent.initialize();
    
    try {
      await runTest(
        agent, 
        "Login to example.com with username 'testuser' and password 'password123', then verify the dashboard loads"
      );
    } finally {
      await agent.close();
    }
  }
  
  main();