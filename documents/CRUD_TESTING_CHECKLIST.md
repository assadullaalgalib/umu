# 🧪 CRUD Testing Checklist

## ✅ Pre-Test Setup
- [ ] Dev server running: `npm run dev`
- [ ] Open http://localhost:5174 in browser
- [ ] Open DevTools: F12
- [ ] Go to Console tab for logs

---

## 📝 Test 1: Create Event

**Steps:**
1. [ ] Click "Admin" button in top-right (or go to /dashboard)
2. [ ] Enter login credentials (any email/password works)
3. [ ] Click "Events" tab
4. [ ] Fill in the form:
   - Title: "My Test Event"
   - Date: 2026-02-20
   - Location: "Test Location"
   - Summary: "This is a test"
   - Content: "Test content"
5. [ ] Click "Add Event" button
6. [ ] Check console for: `✓ Event created:`
7. [ ] See green success message
8. [ ] Go to http://localhost:5174/events
9. [ ] **Verify** your event appears in the list ✅

**Expected Result:** Event shows on Events page within 2 seconds

---

## 📰 Test 2: Create News Article

**Steps:**
1. [ ] Go back to Dashboard
2. [ ] Click "News" tab
3. [ ] Fill in the form:
   - Title: "My Test News"
   - Author: "Test Author"
   - Summary: "Test summary"
   - Content: "This is test news content"
4. [ ] Click "Add News" button
5. [ ] Check console for: `✓ News article created:`
6. [ ] See green success message
7. [ ] Go to http://localhost:5174/news
8. [ ] **Verify** your article appears ✅
9. [ ] Go to home page (http://localhost:5174)
10. [ ] Scroll to "News Carousel"
11. [ ] **Verify** your article appears there too ✅

**Expected Result:** News shows on News page AND home carousel within 2 seconds

---

## 🖼️ Test 3: Upload Gallery Image

**Steps:**
1. [ ] Go back to Dashboard
2. [ ] Click "Gallery" tab
3. [ ] Select an image file (or use any file)
4. [ ] Fill in the form:
   - Title: "My Test Image"
   - Description: "Test image description"
5. [ ] Click "Upload" button
6. [ ] Check console for: `✓ Gallery item uploaded:`
7. [ ] See green success message
8. [ ] Go to http://localhost:5174/gallery
9. [ ] **Verify** your image appears in grid ✅
10. [ ] Go to home page
11. [ ] Scroll to "Gallery Carousel"
12. [ ] **Verify** your image appears there too ✅

**Expected Result:** Image shows on Gallery page AND home carousel within 2 seconds

---

## 🗑️ Test 4: Delete Item

**Steps:**
1. [ ] Go back to Dashboard
2. [ ] Click "Events" tab
3. [ ] Find the event you created ("My Test Event")
4. [ ] Click the red trash icon next to it
5. [ ] Confirm deletion in popup
6. [ ] See success message
7. [ ] Event disappears from dashboard list
8. [ ] Go to http://localhost:5174/events
9. [ ] **Verify** event is gone ✅
10. [ ] Refresh the page (Ctrl+R)
11. [ ] **Verify** event is still gone (persisted!) ✅

**Expected Result:** Item deleted and stays deleted after refresh

---

## ✏️ Test 5: View Data in localStorage

**Steps:**
1. [ ] Open DevTools: F12
2. [ ] Go to "Application" tab
3. [ ] Click "Local Storage" on left
4. [ ] Click your domain (http://localhost:5174)
5. [ ] Find key: `umu_events`
6. [ ] Click it to view the JSON
7. [ ] **Verify** your created event is in the array ✅
8. [ ] Find key: `umu_news`
9. [ ] **Verify** your created news is there ✅
10. [ ] Find key: `umu_gallery`
11. [ ] **Verify** your created image is there ✅

**Expected Result:** All data stored in localStorage with correct structure

---

## 🔄 Test 6: Auto-Refresh Across Tabs

**Steps:**
1. [ ] Open Tab 1: http://localhost:5174 (home page)
2. [ ] Open Tab 2: http://localhost:5174/dashboard
3. [ ] In Tab 2, create a new event
4. [ ] Go back to Tab 1
5. [ ] Look at the page (don't refresh!)
6. [ ] Wait max 2 seconds...
7. [ ] **Verify** new event appears in latest event section ✅

**Expected Result:** New item appears automatically without manual refresh

---

## 💾 Test 7: Persistence After Refresh

**Steps:**
1. [ ] Create a new event/news/image
2. [ ] Note the count (e.g., "5 events total")
3. [ ] Refresh the page (Ctrl+R or F5)
4. [ ] **Verify** your item is still there ✅
5. [ ] Count is same (e.g., still "5 events total")

**Expected Result:** Data persists after page refresh

---

## 🌍 Test 8: Works on All Pages

**Steps:**
1. [ ] Create new event in dashboard
2. [ ] Go to home page → Verify in "Latest Event" section ✅
3. [ ] Go to /events page → Verify in list ✅
4. [ ] Go to /news page → News exists from before ✅
5. [ ] Go to /gallery page → Gallery exists from before ✅
6. [ ] Go back to /dashboard → See in Events tab ✅

**Expected Result:** Same data visible on all pages

---

## 📱 Test 9: Mobile Responsiveness

**Steps:**
1. [ ] Open DevTools: F12
2. [ ] Click device icon (mobile toggle)
3. [ ] Select "iPhone 12"
4. [ ] Go to http://localhost:5174/dashboard
5. [ ] Click hamburger menu (top-left)
6. [ ] **Verify** menu opens ✅
7. [ ] Create an event
8. [ ] Go to /events on mobile
9. [ ] **Verify** layout is responsive ✅
10. [ ] List is mobile-friendly (single column) ✅

**Expected Result:** Works properly on mobile devices

---

## 🐛 Test 10: Error Handling

**Steps:**
1. [ ] Go to Dashboard
2. [ ] Try to create event WITHOUT filling title
3. [ ] Click "Add Event"
4. [ ] **Verify** error message appears: "Please fill in title and date" ✅
5. [ ] Fill in title but not date
6. [ ] Click "Add Event" again
7. [ ] **Verify** same error message ✅

**Expected Result:** Form validation works, prevents invalid data

---

## 📊 Console Check

**Open DevTools Console and verify:**
- [ ] No red errors (Errors ❌)
- [ ] Only info/warning messages (Warnings ⚠️)
- [ ] Messages like:
  - `✓ Event created:` ✅
  - `✓ News article created:` ✅
  - `✓ Gallery item uploaded:` ✅
  - `✓ Event deleted:` ✅

---

## ✨ Final Verification

**All tests passed? Mark as complete:**

- [ ] Test 1: Create Event ✅
- [ ] Test 2: Create News ✅
- [ ] Test 3: Upload Image ✅
- [ ] Test 4: Delete Item ✅
- [ ] Test 5: localStorage Data ✅
- [ ] Test 6: Auto-Refresh ✅
- [ ] Test 7: Persistence ✅
- [ ] Test 8: All Pages ✅
- [ ] Test 9: Mobile ✅
- [ ] Test 10: Error Handling ✅
- [ ] Console: No Errors ✅

---

## 🎉 Congratulations!

**If all tests pass, your CRUD system is working 100%!**

### What This Means:
- ✅ Create events, news, images
- ✅ Data persists across refreshes
- ✅ Shows on all pages automatically
- ✅ Works on mobile and desktop
- ✅ Offline support included
- ✅ Ready for real backend

### Next Step:
When ready to add a real backend:
1. Update dataService.js
2. Replace fetch('/data/...') with fetch('https://your-api.com/...')
3. No component changes needed!

---

## 📞 Troubleshooting

**Data not showing?**
1. Check browser console (F12)
2. Check localStorage (DevTools > Application > Local Storage)
3. Make sure pages are polling (check network tab)

**Item deleted but comes back?**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear localStorage if needed

**Not seeing auto-refresh?**
1. Check that pages have the polling interval
2. May need to wait up to 2 seconds
3. Hard refresh if needed

---

## 📝 Notes

**Add your notes here:**

```
Date Tested: ________________
Tester Name: ________________

Issues Found:
- 
- 
- 

Comments:
- 
- 
- 
```

---

**Your CRUD system is ready to go! 🚀**
