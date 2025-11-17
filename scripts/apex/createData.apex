// Create sample Accounts and Opportunities to populate the dashboard
List<Account> accounts = new List<Account>();
for (Integer i = 1; i <= 20; i++) {
    Account acc = new Account();
    acc.Name = 'Test Account ' + i;
    acc.Industry = 'Technology';
    acc.Type = 'Customer';
    accounts.add(acc);
}
insert accounts;

List<String> stages = new List<String>{'Prospecting', 'Qualification', 'Proposal/Price Quote', 'Negotiation/Review', 'Closed Won'};
List<Opportunity> opportunities = new List<Opportunity>();
for (Account acc : accounts) {
    Opportunity opp = new Opportunity();
    opp.Name = 'Test Opportunity for ' + acc.Name;
    opp.AccountId = acc.Id;
    // Randomly select a stage
    Integer randomIndex = (Integer)(Math.random() * stages.size());
    opp.StageName = stages[randomIndex];
    opp.CloseDate = Date.today().addDays(30);
    opp.Amount = Math.random() * 100000; // Random amount
    opportunities.add(opp);
}
insert opportunities;

System.debug('Created ' + accounts.size() + ' accounts and ' + opportunities.size() + ' opportunities.');