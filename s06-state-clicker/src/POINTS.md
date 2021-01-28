
1. Always use setState() to change state rather than modifying it directly: setState() works in the way that it create a new state and assign it to 'this.state', which would trigger re-rendering.
2. Why and how do I bind a function to a component instance?
3. Alternative way to define and initiate 'state': babel would do some more work that is done by the first given way.
4. Alternative way to define method (in function creation way)