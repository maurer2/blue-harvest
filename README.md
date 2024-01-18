# Blue Harvest

## Technologies

- Next 14 with server- and client components
- TypeScript
- Zod
- Vanilla Extract
- Eslint
- Modern-normalize

## Solution

After starting the app, the Star Wars api is fetched server side to get all root categories. At the moment only three categories are shown, the rest are discarded as per assignment. Each remaining category is added to the top navigation. When navigating to a category, the category data is fetched server side. Since the Star Wars api only returns 10 results per request, each request needs to be repeated multiple times until all data have been fetched. Afterwards the fetched request data needs to be combined. This data data is then passed to the content grid component. In that component, the previously fetched data is parsed via Zod to make sure, that the TypeScript types, which are are generated from the Zod schemas, are accurate. If parsing fails, then an error message is shown for this category.
When the data is correct, then the content grid is rendered. While each category page has its own grid component, category pages share CSS styles for consistency. Each category page is rendered as a client component to allow switching between sorted and unsorted on click. Additionally there is also a search field that can be used to switch between categories by manually entering the category name or selecting the option from the list. It uses the default data list feature of html inputs. Unfortunately, it can't be styled very well.

## Enhancements

- Tests
- Custom data list component that can be styled
- Predefined root categories to be able to use const assertion for categories
- Pagination instead of manually combining the payload of multiple requests
- Better design
