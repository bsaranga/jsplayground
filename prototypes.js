function foo() {
    Array.prototype.forEach.call(arguments, function(msg) {
        console.log(msg)
    })
}

foo('hello world', 123)

const bar = Array.prototype.map.bind([1,2,3], msg => {
    return `${msg}_foo`
})

console.log(bar())