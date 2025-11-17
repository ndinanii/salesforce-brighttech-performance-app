# BrightTech Solutions: Sales Performance "Mission Control"

This project democratizes insights by delivering a user-centric "mission control" app in Salesforce, surfacing actionable intelligence for the management team.

## 1. Business Challenge

Management was "flying blind." The data they needed existed within Salesforce, but it was difficult to access, aggregate, and interpret. They wasted time digging for information instead of taking action.

## 2. My Role & Strategic Solution

As a Junior Salesforce Strategist, my goal was to **democratize insights**. I designed a user-centric "mission control" center to surface actionable intelligence tailored specifically for the management team.

### Phase 1: Persona-Based Design

- **Business Goal:** Understood what "sales performance" truly meant to a manager and identified the 3-5 key metrics they needed to see daily.
- **Platform Strategy:** Designed a dedicated **Lightning App** rather than just a dashboard. This approach allowed for a fully controlled user experience, from navigation to a purpose-built home page.

### Phase 2: Configuration & User Experience (UX)

- **Business Goal:** Make the application intuitive, fast, and easy to use.
- **Platform Strategy:** Used the **Lightning App Builder** to construct the app with "clicks, not code," ensuring it is easy for future admins to maintain. The focus was on a clean UI, logical navigation, and a custom home page presenting the most critical charts "above the fold."

### Phase 3: Access & Adoption

- **Business Goal:** Ensure the *right* people see the *right* data, securely.
- **Platform Strategy:** Managed access through **Profiles and Permission Sets** as a key governance step to enforce data security and visibility rules.

## 3. Strategist's Note

> This solution demonstrates a customer-centric approach by treating the internal manager as the customer. By using standard reporting and the Lightning App Builder, we delivered a powerful, zero-code solution that empowers leaders and drives user adoption without incurring technical debt.

## 4. Requirements Elicitation

### Business Needs
- **Stakeholders**: Sales managers at BrightTech Solutions.
- **Pain Points**: Difficulty accessing and interpreting sales data, leading to inefficient decision-making.
- **Goals**: Create a centralized app for monitoring sales performance, tracking leads/opportunities, and identifying underperforming areas.
- **Key Requirements**:
  - Custom Lightning App named "Sales Dashboard".
  - Tabs for Leads, Opportunities, Accounts.
  - Custom home page with charts, reports, and recent records.
  - Easy navigation menu.
  - Deployment in Lightning Experience.
  - Access control via profiles.

### Functional Requirements
- Display key metrics: Sales performance charts, opportunity pipeline, recent leads.
- Ensure data is refreshed and actionable.
- Support for bulk data creation for testing.

### Non-Functional Requirements
- Intuitive UI, fast loading, secure access.
- Zero-code/low-code for maintainability.

## 5. User-Centric Design

### Persona Analysis
- **Primary User**: Sales Manager – Needs quick insights into performance, pipeline, and leads to make informed decisions.
- **User Journey**: Login → Access app → View dashboard → Navigate to details → Take action.

### Design Principles
- **Simplicity**: Clean layout with essential components above the fold.
- **Accessibility**: Standard Salesforce UI for familiarity.
- **Feedback**: Refresh buttons on charts for real-time data.

### Wireframe/Prototype
- Home Page: Welcome message, sales chart (left), pipeline chart (middle), leads list (right).
- Navigation: Tabs for core objects.

## 6. Business Process Mapping

### Current Process
1. Managers log in to Salesforce.
2. Manually search for reports or dashboards.
3. Aggregate data from multiple sources.
4. Interpret and act on insights.

### Improved Process
1. Managers access "Sales Dashboard" app directly.
2. View centralized insights on home page.
3. Drill down via tabs or charts.
4. Quick actions for leads/opportunities.

### Process Flow
- App Launch → Home Page → Charts/Lists → Tab Navigation → Record Details.

## 7. Data Modeling (ERD/Schema Design)

### Key Entities
- **Account**: Customer details (Name, Industry, Type).
- **Opportunity**: Sales deals (Name, AccountId, StageName, CloseDate, Amount).
- **Lead**: Potential customers (Name, Status, etc.).

### Relationships
- Opportunity belongs to Account (Lookup).
- Lead can convert to Account/Opportunity.

### Schema
- Standard Salesforce objects used; no custom objects in final design.
- ERD: Account (1) -- (M) Opportunity; Lead (independent).

### Data Population
- Sample data created via Apex: 20 Accounts + 20 Opportunities.
- Script: `scripts/apex/createData.apex` (inserts bulk records).

## 8. Defining Testable Criteria

### Acceptance Criteria
- App deploys successfully in Lightning Experience.
- Home page loads with charts and lists.
- Navigation works for all tabs.
- Data refreshes correctly.
- Access restricted to assigned profiles.

### Test Cases
1. **App Access**: Login as test user → App visible in App Launcher.
2. **Home Page**: Charts display data; leads list editable.
3. **Navigation**: Click tabs → Correct pages load.
4. **Data Integrity**: New opportunities appear in charts/reports.
5. **Performance**: Page loads <3 seconds.

### Tools
- Manual testing in org.
- Apex for data creation.

## 9. Clear Documentation

### Project Structure
- `force-app/main/default/applications/Sales_Dashboard.app-meta.xml`: App metadata.
- `force-app/main/default/flexipages/Sales_Dashboard_Home.flexipage-meta.xml`: Home page layout.
- `scripts/apex/createData.apex`: Data generation script.
- `manifest/package.xml`: Deployment manifest.

### Deployment Steps
1. Authorize org: `sf org login web`.
2. Deploy: `sf project deploy start`.
3. Run data script: `sf apex run --file scripts/apex/createData.apex`.
4. Test in Lightning Experience.

### Maintenance
- Update via App Builder for UI changes.
- Monitor reports for data accuracy.

This documentation ensures the project is reproducible and easy to follow.
