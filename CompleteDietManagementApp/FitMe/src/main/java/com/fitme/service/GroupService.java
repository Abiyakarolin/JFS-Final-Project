package com.fitme.service;

import java.util.Optional;

import com.fitme.model.Groups;

public interface GroupService {

	Optional<Groups> findGroupsById(String target);

}
