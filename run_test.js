async function runTest(agent, testDescription) {
    console.log(`Generating test for: ${testDescription}`);
    const testCode = await agent.generateTest(testDescription);
    
    console.log("Executing test...");
    const result = await agent.executeTest(testCode);
    
    if (result.success) {
      console.log("Test passed!");
    } else {
      console.log(`Test failed: ${result.error}`);
    }
    
    return { testCode, result };
  }