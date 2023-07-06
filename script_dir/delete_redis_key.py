# encoding: utf-8
"""
    快速删除1.2亿指定前缀Key
"""
import redis
import random
import string
import time
pool = redis.ConnectionPool(host='127.0.0.1', port=6379, db=2)
r = redis.Redis(connection_pool=pool)

def random_str():
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(7))

def init_keys():
    start_time = time.time()
    for i in xrange(0, 100000):
        key_name = 'dba_'+str(i)
        value_name = random_str()
        r.set(key_name, value_name)
    print 'initial keys successfully,use time:', time.time() - start_time

def del_keys_without_pipe():
    start_time = time.time()
    result_length = 0
    for key in r.scan_iter(match='dba_*', count=2000):
        r.delete(key)
        result_length += 1
    print "normal ways end at:", time.time() - start_time
    print "normal ways delete numbers:", result_length

def del_keys_with_pipe():
    start_time = time.time()
    result_length = 0
    pipe = r.pipeline()
    for key in r.scan_iter(match='dba_*', count=5000):
        pipe.delete(key)
        result_length += 1
        if result_length % 5000 == 0:
            pipe.execute()
    pip_time = time.time()
    print "use pipeline scan time ", time.time() - start_time
    pipe.execute()

    print "use pipeline end at:", time.time() - pip_time
    print "use pipeline ways delete numbers:", result_length

def main():
    init_keys()
    # del_keys_without_pipe()
    # init_keys()
    # del_keys_with_pipe()

if __name__ == '__main__':
    main()