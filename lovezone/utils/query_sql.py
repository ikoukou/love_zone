from django.db import connection


def query_all_dict(sql, params=None):
    """
    查询所有结果返回字典类型数据
    :param sql:
    :param params:
    :return:
    """
    with connection.cursor() as cursor:
        print(cursor)
        if params:
            cursor.execute(sql, params=params)
        else:
            cursor.execute(sql)
        col_names = [desc[0] for desc in cursor.description]
        row = cursor.fetchall()
        row_list = []
        for li in row:
            t_map = dict(zip(col_names, li))
            row_list.append(t_map)
        return row_list


def query_one_dict(sql, params=None):
    """
    查询一个结果返回字典类型数据
    :param sql:
    :param params:
    :return:
    """
    with connection.cursor() as cursor:
        if params:
            cursor.execute(sql, params=params)
        else:
            cursor.execute(sql)
        col_names = [desc[0] for desc in cursor.description]
        row = cursor.fetchone()
        t_map = dict(zip(col_names, row))
        return t_map


