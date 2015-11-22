/**
 �������� ��������� makeCaching(f), ������� ����� ������� f � ���������� �������, ������� �������� � ����������.
 � ���� ������ ������� f ����� ������ ���� ��������, � �� �������� ������.
 ��� ������ ������ ������� � ������������ ���������� � ��� �������� f � ���������� ��������.
 ��� ������ � ����������� ������� � ��� �� ���������� ������������ ����������� ��������.
 ������ �������� ���:
 function f(x) {
  return Math.random() * x; // random ��� �������� ������������
}
 function makeCaching(f) { / ��� ��� / }
f = makeCaching(f);
var a, b;
a = f(1);
b = f(1);
alert( a == b ); // true (�������� ������������)
b = f(2);
alert( a == b ); // false, ������ �������� => ������ ��������
 */

function f(x) {
    return Math.random() * x; // random ��� �������� ������������
}

function makeCaching(f) {
    var cache = {};
    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };
}

f = makeCaching(f);
var a, b;
a = f(1);
b = f(1);
console.log(a);
console.log(b);
console.log( a == b ); // true (�������� ������������)

b = f(2);
console.log(a);
console.log(b);
console.log( a == b ); // false, ������ �������� => ������ ��������