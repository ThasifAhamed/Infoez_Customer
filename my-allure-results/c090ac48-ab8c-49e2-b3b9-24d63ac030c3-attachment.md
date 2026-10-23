# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> verifying Infoez Application >> Verify that user can create own account >> Example #1
- Location: .features-gen\features\Features.feature.spec.js:12:9

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Infoez Find Local" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e11]:
          - generic [ref=e12]: Infoez
          - generic [ref=e13]: Find Local
      - navigation [ref=e14]:
        - link "Explore" [ref=e15] [cursor=pointer]:
          - /url: /search
        - link "Near me" [ref=e16] [cursor=pointer]:
          - /url: /map
        - link "How it works" [ref=e17] [cursor=pointer]:
          - /url: /how-it-works
        - link "Pricing" [ref=e18] [cursor=pointer]:
          - /url: /pricing
      - generic [ref=e19]:
        - button "Sign in" [ref=e20] [cursor=pointer]
        - button "Get started" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - heading "Create your account" [level=1] [ref=e29]
        - paragraph [ref=e30]: Join Infoez in seconds.
      - generic [ref=e31]:
        - generic [ref=e32]:
          - text: I am a
          - radiogroup [ref=e33]:
            - generic [ref=e34] [cursor=pointer]:
              - radio "Customer Find & save businesses" [checked] [ref=e35]
              - radio [checked] [aria-hidden]
              - generic [ref=e39]:
                - generic [ref=e40]: Customer
                - generic [ref=e41]: Find & save businesses
            - generic [ref=e42] [cursor=pointer]:
              - radio "Business List & get leads" [ref=e43]
              - radio [aria-hidden]
              - generic [ref=e44]:
                - generic [ref=e45]: Business
                - generic [ref=e46]: List & get leads
        - generic [ref=e47]:
          - text: Full name
          - textbox [active] [ref=e48]
        - generic [ref=e49]:
          - text: Email
          - textbox [ref=e50]: thasif1792755973168@gmail.com
        - generic [ref=e51]:
          - text: Phone (optional)
          - textbox [ref=e52]: "9876543210"
        - generic [ref=e53]:
          - text: Password
          - textbox [ref=e54]: admin1
        - button "Create account" [ref=e55] [cursor=pointer]
        - paragraph [ref=e56]:
          - text: Already have an account?
          - link "Sign in" [ref=e57] [cursor=pointer]:
            - /url: /login
  - contentinfo [ref=e58]:
    - generic [ref=e59]:
      - generic [ref=e60]:
        - generic [ref=e61]: Infoez
        - paragraph [ref=e67]: Find Local. Choose Better. The trusted directory for verified local businesses and services.
      - generic [ref=e68]:
        - generic [ref=e69]: Discover
        - list [ref=e70]:
          - listitem [ref=e71]:
            - link "All Businesses" [ref=e72] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e73]:
            - link "Featured" [ref=e74] [cursor=pointer]:
              - /url: /search?featured=true
          - listitem [ref=e75]:
            - link "Top Rated" [ref=e76] [cursor=pointer]:
              - /url: /search?sort=rating
      - generic [ref=e77]:
        - generic [ref=e78]: For Business
        - list [ref=e79]:
          - listitem [ref=e80]:
            - link "Add your business" [ref=e81] [cursor=pointer]:
              - /url: /register?role=business_owner
          - listitem [ref=e82]:
            - link "Pricing plans" [ref=e83] [cursor=pointer]:
              - /url: /pricing
          - listitem [ref=e84]:
            - link "How claims work" [ref=e85] [cursor=pointer]:
              - /url: /how-it-works
      - generic [ref=e86]:
        - generic [ref=e87]: Company
        - list [ref=e88]:
          - listitem [ref=e89]:
            - link "How it works" [ref=e90] [cursor=pointer]:
              - /url: /how-it-works
          - listitem [ref=e91]:
            - link "Pricing" [ref=e92] [cursor=pointer]:
              - /url: /pricing
          - listitem [ref=e93]:
            - link "Contact" [ref=e94] [cursor=pointer]:
              - /url: /register
    - generic [ref=e96]:
      - paragraph [ref=e97]: © 2026 Infoez. All rights reserved.
      - paragraph [ref=e98]: Find Local. Choose Better.
  - region "Notifications alt+T"
```