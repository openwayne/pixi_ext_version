export function mathSign(x)
{
    x = Number(x);

    if (x === 0 || isNaN(x))
    {
        return x;
    }

    return x > 0 ? 1 : -1;
};