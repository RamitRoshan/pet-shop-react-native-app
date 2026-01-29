Code:

```
import { View, Text, ActivityIndicator } from 'react-native'

export default function Loader() {
  return (
    <View>
      {/* <Text>Loader</Text> */}
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}
```

# Why we use ActivityIndicator in React Native?

- `ActivityIndicator` is a built-in loader component in React Native.

- It shows a loading spinner while:

    - Data is fetching from API
    - Screen is loading
    - Image / async task is in progress
    - 

**Why not plain text like `"Loading..."`?**

- Spinner gives better UX

- Users understand something is happening

- Looks professional & standard (used in real apps)

**In your code 👇**
```
<ActivityIndicator size="large" color="#0000ff" />
```
- size="large" → bigger spinner

- color="#0000ff" → blue color


### When to use it (real projects):
```
if (loading) {
  return <Loader />
}
```


**Used in:**

- API calls

- Authentication

- Screen transitions



**`ActivityIndicator` is used to indicate background processing or loading state to improve user experience.**


### Why @ is popular in Expo / React Native

**✅ 1. Cleaner imports**
```
// ❌ ugly
import { Movie } from '../../../types/movie'
```

**// ✅ clean**
```
import { Movie } from '@/types/movie'
```

### Moving files doesn’t break imports

If you move MovieCard.tsx to another folder:

../types/movie ❌ breaks

@/types/movie ✅ still works

- “@ is a path alias used to avoid deep relative imports. It improves readability, maintainability, and prevents import breakage when files move.”



