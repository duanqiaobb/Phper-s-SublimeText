if (blah(param)) {

}

if ((condition1
    || condition2)
    && condition3
    && condition4
    && condition5
) {
}

if ((condition1 || condition2) && condition3 && condition4 && condition5) {
}

if ((condition1 || condition2)
    && condition3
) {
}

if (
    (condition1 || condition2)
    && condition3
) {
}

if ((condition1
    || condition2)
) {
}

if ((condition1
    || condition2)
    && condition3 &&
    condition4
) {
}

if ((condition1
   || condition2)
      && condition3
   && condition4
   && condition5
) {
}

if (($condition1
    || $condition2)
)  {
}

if ((condition1
    || condition2)
 ) {
}

if (
    (
    condition1
    || condition2
    )
    && condition3
) {
}


if (   condition1
    || condition2
    || condition3
) {
}

if (condition1
    || condition2
    || condition3
) {
} else if (condition1
    || condition2
    || condition3
) {
}

if (condition1
    || condition2
    || condition3
) {
} else if (
    condition1
   || condition2 &&
    condition3
) {
}

if (condition1
    || condition2
|| condition3) {
}

if (condition1
    || condition2 || condition3
){
}

if (condition1)
    console.info('bar');

if (condition1
    || condition2
|| condition3)
    console.info('bar');


if (condition1
    || condition2 || condition3
)
    console.info('bar');

if (!a(post)
    && (!a(context.header)
    ^ a(context.header, 'Content-Type'))
) { 
// ...
}

if (foo)
{
    console.info('bar');
}

// Should be no errors even though lines are
// not exactly aligned together. Multi-line function
// call takes precedence.
if (array_key_exists(key, value)
    && foo.bar.baz(
        key, value2
    )
) {
}

if (true) {
    foo = true;
};

if (foo == 401 || // comment
    bar == 3200)  /* long comment
                     here
                   */
{
    return false;
}

if (foo == 401 || // comment
    bar == 3200)  // long comment here
{
    return false;
}
