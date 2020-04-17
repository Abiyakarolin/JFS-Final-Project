package com.fitme.Repo;

import org.springframework.data.repository.CrudRepository;

import com.fitme.model.Donate;

public interface DonateRepo extends CrudRepository<Donate, Integer> {

}
